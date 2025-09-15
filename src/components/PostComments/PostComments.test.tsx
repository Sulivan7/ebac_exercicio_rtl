import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente Post", () => {
    it("Deve renderizar o componente corretamente", () => {
        render(<PostComment />);
        expect(screen.getByText("Comentar")).toBeInTheDocument();
    });

    test("Deve adicionar 2 comentarios", () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: { 
                value: "Primeiro comentário" 
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentar"));
        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: { 
                value: "Segundo comentário" 
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentar"));
        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
        });
    });
