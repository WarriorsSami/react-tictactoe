/**
 * Undefeatable TicTacToe
 *
 * Class for computer player logic
 *
 * Approach:
 * - Use minimax algorithm
 */

const CORNERS = [[0, 0], [2, 0], [0, 2], [2, 2]];
const MAX_DEPTH = 9;

export default class TTTComPlay {
  static possibleMoves(board) {
    const moves = [];

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (!board[x][y]) moves.push([x, y]); // Empty spaces will be `0` (falsey)
      }
    }

    return moves;
  }

  static score(state, depth = 0) {
    if (!state.hasWon) return 0;

    return depth + (state.hasWon === 1 ? MAX_DEPTH : -MAX_DEPTH);
  }

  static minimax(game, depth = 0) {
    if (depth >= MAX_DEPTH) {
      throw new Error('Runaway minimax algorithm has reached impossible depth');
    }

    const state = game.state;

    if (state.hasWon !== 0) {
      return { score: TTTComPlay.score(state, depth) };
    }

    const possibleMoves = TTTComPlay.possibleMoves(state.board);

    const moves = [];
    const scores = [];

    let maxIndex;
    let minIndex;

    depth += 1;

    possibleMoves.forEach(function checkPossibleMove(move) {
      const futureGame = game.cloneWithMove.apply(game, move);
      const possible = TTTComPlay.minimax(futureGame, depth);

      moves.push(move);
      scores.push(possible.score);
    });

    if (state.nextPlayer === 1) {
      maxIndex = scores.indexOf(Math.max.apply(Math, scores));
    } else {
      minIndex = scores.indexOf(Math.min.apply(Math, scores));
    }

    return {
      move: moves[maxIndex !== undefined ? maxIndex : minIndex],
      score: scores[maxIndex !== undefined ? maxIndex : minIndex]
    };
  }

  static openingMove(game) {
    // Play center or random corner
    return game.state.board[1][1] === 0
      ? [1, 1]
      : CORNERS[Math.floor(Math.random() * 4)];
  }

  static idealMove(game) {
    // Reduce minimax search space for first computer move
    return game.state.openSpaces === 8
      ? TTTComPlay.openingMove(game)
      : TTTComPlay.minimax(game).move;
  }
}
