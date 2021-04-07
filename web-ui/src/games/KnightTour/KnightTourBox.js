import React from "react";
import {
    DEFAULT_KNIGHT_TOUR_CELL,
    DEFAULT_KNIGHT_TOUR_SIZE,
    DEFAULT_SUDOKU_BOARD_CELL
} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import knightTourService from "../../service/KnightTourService";
import {loadBKnight} from "../../service/ImageLoader";
import Point from "../../utils/Point";
import Position from "../../utils/Position";

export default class KnightTourBox extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.state = {
            knightPosition: new Position(1, 4),
            isFocus: false,
            pickingPosition: null,
            movablePositions: [],
            movedPositions: [],
            boardStatus: null
        }
    }

    drawBoard = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');


        const knightImage = loadBKnight();
        knightImage.onload = () => {
            boardFactory.clearBoard(canvas);
            boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
            knightTourService.drawKnightImage(ctx, this.state.knightPosition);
            if (this.state.isFocus) {
                knightTourService.drawMovablePositions(ctx, this.state.movablePositions);
            }
            knightTourService.drawMovedPositions(ctx, this.state.movedPositions);
        }
    }

    handleMouseOver = () => {
        this.canvasRef.current.style.cursor = "pointer";
    }

    handleMove = (event) => {
        const canvas = this.canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const point = new Point(x, y);
        const xy = point.toPosition();
        console.log(xy);
        if (xy == null) return;

        if (this.state.isFocus) {
            if (xy.compareTo(this.state.pickingPosition)) {
                this.setState({
                    isFocus: false,
                    pickingPosition: []
                })
            } else if (knightTourService.movable(this.state.knightPosition, xy)) {
                const movedPositions = [...this.state.movedPositions];
                movedPositions.push(this.state.knightPosition);
                this.setState({
                    knightPosition: xy,
                    isFocus: false,
                    pickingPosition: null,
                    movablePositions: [],
                    movedPositions: movedPositions
                })
            }
        } else {
            const knightPosition = this.state.knightPosition;
            if (!xy.compareTo(knightPosition)) return;
            this.setState({
                isFocus: true,
                pickingPosition: xy,
                movablePositions: knightTourService.findMovablePositions(knightPosition,
                    DEFAULT_KNIGHT_TOUR_CELL, this.state.movedPositions)
            })
            console.log(knightTourService.findMovablePositions(knightPosition, DEFAULT_KNIGHT_TOUR_CELL, this.state.movedPositions));
        }
    }

    componentDidMount() {
        this.drawBoard();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.drawBoard();
    }

    render() {
        return (
            <canvas ref={this.canvasRef}
                    className={"border border-danger"}
                    width={DEFAULT_KNIGHT_TOUR_SIZE}
                    height={DEFAULT_KNIGHT_TOUR_SIZE}
                    onClick={this.handleMove}
                    onMouseOver={this.handleMouseOver}
            />
        )
    }
}