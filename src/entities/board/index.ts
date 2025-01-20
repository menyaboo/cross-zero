import {useGameContext} from "@/shared/store";
import {useEffect} from "react";
import {IWinner} from "@/shared/interfaces";

const useBoardUseCase = () => {
	const {board, setWinner} = useGameContext()

	// TODO: Реализовать функцию расчета победителя
	const checkWinner = (): IWinner => {
		// const lines = [
		// 	[0, 1, 2], [3, 4, 5], [6, 7, 8],
		// 	[0, 3, 6], [1, 4, 7], [2, 5, 8],
		// 	[0, 4, 8], [2, 4, 6],
		// ];
		//
		// for (const [a, b, c] of lines) {
		// 	if (board[a].player && board[a].player === board[b].player && board[a].player === board[c].player) {
		// 		return board[a].player;
		// 	}
		// }

		return null;
	};

	useEffect(() => {
		setWinner(checkWinner())
	}, [board]);
}

export {
	useBoardUseCase,
}