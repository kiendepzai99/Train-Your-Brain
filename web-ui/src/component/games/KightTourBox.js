import React from "react";
import {DEFAULT_KNIGHT_TOUR_SIZE, DEFAULT_SUDOKU_BOARD_CELL} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";

export default class KnightTourBox extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            boardStatus: null
        }
    }

    drawBoard = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
    }

    handleMouseOver = () => {
        this.canvasRef.current.style.cursor = "pointer";
    }

    handleMove = (event) => {

    }

    componentDidMount() {
        this.drawBoard();
    }

    render() {
        return (
            <canvas ref={this.canvasRef}
                    width={DEFAULT_KNIGHT_TOUR_SIZE}
                    height={DEFAULT_KNIGHT_TOUR_SIZE}
                    onClick={this.handleMove}
                    onMouseOver={this.handleMouseOver}
            />
        )
    }
}