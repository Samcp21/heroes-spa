import { authReducer, types } from "../../../index";

describe("Pruebas en el authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    // Arrange
    // Act
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
    // Assert
  });
  test("Debe de (login) llamar el login autenticar y establecer el user", () => {
    // Arrange
    const action = {
      type: types.login,
      payload: {
        name: "Juan",
        id: "123",
      },
    };
    // Act
    const state = authReducer({ logged: false }, action);
    // Assert
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test("Debe de (logout) borrar el name del usuario y logged en false", () => {
    // Arrange
    const state = {
      logged: true,
      user: { id: "123", name: "Juan" },
    };
    // Act
    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    // Assert
    expect(newState).toEqual({ logged: false });
  });
});
