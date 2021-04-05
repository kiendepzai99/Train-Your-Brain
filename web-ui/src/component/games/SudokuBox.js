import React from "react";
import {DEFAULT_SUDOKU_BOARD_CELL, DEFAULT_SUDOKU_BOARD_SIZE} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import sudokuService from "../../service/SudokuService";
import {mockBoardStatus} from "../../mockData";
import Point from "../../utils/Point";
import Item from "../../utils/Item";

export default class SudokuBox extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            boardStatus: null,
            pickingPosition: null

        }
    }

    drawBoard = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getSudokuBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
        sudokuService.drawPickingCell(ctx, this.state.pickingPosition);
        if (this.state.boardStatus != null) {
            sudokuService.displayBoard(ctx, this.state.boardStatus);
        }
    }

    handleMouseOver = () => {
        this.canvasRef.current.style.cursor = "pointer";
    }

    handlePressKey = (event) => {
        console.log(event.key);
        const key = Number(event.key);
        if (!isNaN(key) && event.key != null && event.key !== ' ') {
            const pickingPosition = this.state.pickingPosition;
            if (pickingPosition != null) {
                const [row, col] = [pickingPosition.row, pickingPosition.col];
                const item = this.state.boardStatus[row][col];
                if (item.editable) {
                    const newBoardStatus = [...this.state.boardStatus];
                    newBoardStatus[row][col] = new Item(key, true);
                    this.setState({
                        boardStatus: newBoardStatus
                    })
                }
            }
        }
    }

    handleMove = (event) => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const point = new Point(x, y);
        const xy = point.toPosition();
        console.log(xy);

        if (xy == null) return;

        const pickingPosition = this.state.pickingPosition;
        if (pickingPosition != null) {
            if (xy.compareTo(pickingPosition)) {
                this.setState({
                    pickingPosition: null
                })
            } else {
                this.setState({
                    pickingPosition: xy
                })
            }
        } else {
            this.setState({
                pickingPosition: xy
            })
        }
    }

    componentDidMount() {
        this.drawBoard();
        this.setState({
            boardStatus: mockBoardStatus()
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.drawBoard();
    }

    render() {
        return (
            <canvas ref={this.canvasRef}
                    tabIndex="1"
                    width={DEFAULT_SUDOKU_BOARD_SIZE}
                    height={DEFAULT_SUDOKU_BOARD_SIZE}
                    onClick={this.handleMove}
                    onMouseOver={this.handleMouseOver}
                    onKeyPress={this.handlePressKey}
            />
        )
    }
}