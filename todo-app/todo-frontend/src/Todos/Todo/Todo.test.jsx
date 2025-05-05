import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Todo from "./Todo";

describe("Todo component", () => {
  const mockDelete = vi.fn();
  const mockComplete = vi.fn();

  const baseTodo = {
    text: "Buy milk",
    done: false,
  };

  it("renders todo text", () => {
    render(
      <Todo
        todo={baseTodo}
        handleClickDelete={mockDelete}
        handleClickComplete={mockComplete}
      />
    );
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("shows 'not done' info when todo is not completed", () => {
    render(
      <Todo
        todo={baseTodo}
        handleClickDelete={mockDelete}
        handleClickComplete={mockComplete}
      />
    );

    expect(screen.getByText("This todo is not done")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Set as done")).toBeInTheDocument();
  });

  it("shows 'done' info when todo is completed", () => {
    render(
      <Todo
        todo={{ ...baseTodo, done: true }}
        handleClickDelete={mockDelete}
        handleClickComplete={mockComplete}
      />
    );

    expect(screen.getByText("This todo is done")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.queryByText("Set as done")).not.toBeInTheDocument();
  });

  it("calls handleClickDelete when delete button is clicked", () => {
    render(
      <Todo
        todo={baseTodo}
        handleClickDelete={mockDelete}
        handleClickComplete={mockComplete}
      />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });

  it("calls handleClickComplete when 'Set as done' button is clicked", () => {
    render(
      <Todo
        todo={baseTodo}
        handleClickDelete={mockDelete}
        handleClickComplete={mockComplete}
      />
    );

    fireEvent.click(screen.getByText("Set as done"));
    expect(mockComplete).toHaveBeenCalledTimes(1);
  });
});
