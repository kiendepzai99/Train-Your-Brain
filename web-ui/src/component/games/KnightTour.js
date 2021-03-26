import React from "react";
import {DEFAULT_HORSE_CHECKING_SIZE, DEFAULT_SUDOKU_BOARD_CELL} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";

export default class KnightTour extends React.Component {
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

    componentDidMount() {
        this.drawBoard();
    }

    render() {
        return (
            <div className="col-6 text-center mt-4">
                <canvas id="board" ref={this.canvasRef}
                        width={DEFAULT_HORSE_CHECKING_SIZE}
                        height={DEFAULT_HORSE_CHECKING_SIZE}
                        onClick={this.handleMove}
                        onMouseOver={this.handleMouseOver}
                />
            </div>
        )
    }
}