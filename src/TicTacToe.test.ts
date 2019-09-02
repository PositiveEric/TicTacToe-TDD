import { Game } from "./TicTacToe";

describe("TicTacToe The Game", () => {
  test("The game should have an empty field in a 3x3 grid", () => {
    const game = new Game();
    const field = game.getField();

    expect(field.length).toEqual(9);

    expect(field.every(it => it === "")).toBeTruthy();
  });

  test("First turn should be player X", () => {
    const game = new Game();
    const turn = game.getPlayerTurn();

    expect(turn).toBe("X");
  });

  test("Player should be able to make a move", () => {
    const game = new Game();
    game.makeMove(0);
    const field = game.getField();

    expect(field[0]).toBe("X");
  });

  test("Players should be able to take turns", () => {
    const game = new Game();
    game.makeMove(0);
    const turn = game.getPlayerTurn();

    expect(turn).toBe("O");
  });

  test("A Player can't take a field if it is taken", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(0);
    game.makeMove(2);
    game.makeMove(1);
    game.makeMove(1);
    game.makeMove(1);
    game.makeMove(3);
    // [ 'X', 'X', 'O', 'O', '', '', '', '', '' ]

    const field = game.getField();

    expect(field[2]).toBe("O");
  });

  test("Player wins the game if all field in a ROW are owned by player", () => {
    const game = new Game();
    game.makeMove(6);
    game.makeMove(1);
    game.makeMove(7);
    game.makeMove(3);
    game.makeMove(8);
    const winner = game.getWinner();

    expect(winner).toBe(`X`);
  });

  test("Player wins the game if all field in a COLUMN are owned by player", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(2);
    game.makeMove(1);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(8);

    const winner = game.getWinner();

    expect(winner).toBe(`O`);
  });

  test("Player wins the game if all field in a DIAGONAL are owned by player", () => {
    const game = new Game();
    game.makeMove(1);
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(4);
    game.makeMove(7);
    game.makeMove(8);

    const winner = game.getWinner();

    expect(winner).toBe(`O`);
  });

  test("The game ends with a DRAW if no players wins", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(2);
    // 'X', 'O', 'X',
    game.makeMove(3);
    game.makeMove(5);
    game.makeMove(4);
    // 'O', 'O', 'X',
    game.makeMove(6);
    game.makeMove(8);
    game.makeMove(7);
    // 'X', 'X', 'O'

    const gameOver = game.getWinner();

    expect(gameOver).toBe(`draw`);
  });

  test("Empty field cannot win: scenario ONE", () => {
    const game = new Game();
    game.makeMove(6);
    game.makeMove(3);
    game.makeMove(7);
    game.makeMove(4);
    game.makeMove(8);

    const field = game.getField();

    expect(field).toEqual(["", "", "", "O", "O", "", "X", "X", "X"]);

    expect(game.getWinner()).toBe(`X`);
  });

  test("Empty field cannot win scenario: Scenario TWO", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(1);
    game.makeMove(5);
    game.makeMove(2);

    const field = game.getField();

    expect(field).toEqual(["X", "X", "X", "O", "", "O", "", "", ""]);

    expect(game.getWinner()).toBe(`X`);
  });

  test("Empty field cannot win scenario: Scenario THREE", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(3);
    game.makeMove(4);
    game.makeMove(6);

    const field = game.getField();

    expect(field).toEqual(["X", "O", "", "X", "O", "", "X", "", ""]);

    expect(game.getWinner()).toBe(`X`);
  });
});
