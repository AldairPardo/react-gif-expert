import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("GifGridItem component", () => {
    const title = "Un título";
    const url = "https://localhost/algo.jpg";

    test("debe hacer match con el snapshot", () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar la imagen igual al url y alt de los props", () => {
        render(<GifGridItem title={title} url={url} />);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("debe de mostrar el titulo en el componente", () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
