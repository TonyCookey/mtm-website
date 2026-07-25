import type { LegalBlock } from "@/content/legal";

type LegalDocumentBodyProps = {
  blocks: LegalBlock[];
};

function Heading({ block }: { block: Extract<LegalBlock, { type: "heading" }> }) {
  if (block.level === 2) {
    return <h2 id={block.id}>{block.text}</h2>;
  }

  if (block.level === 3) {
    return <h3 id={block.id}>{block.text}</h3>;
  }

  return <h4 id={block.id}>{block.text}</h4>;
}

export function LegalDocumentBody({ blocks }: LegalDocumentBodyProps) {
  return (
    <div className="legal-body">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return <Heading block={block} key={`${block.id}-${index}`} />;
        }

        if (block.type === "paragraph") {
          return <p key={`${block.text.slice(0, 24)}-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          const List = block.style === "numbered" ? "ol" : "ul";

          return (
            <List key={`list-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`${item.slice(0, 24)}-${itemIndex}`}>{item}</li>
              ))}
            </List>
          );
        }

        return (
          <div className="legal-table-wrap" key={`table-${index}`}>
            <table>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => {
                      const Cell = rowIndex === 0 ? "th" : "td";

                      return <Cell key={`${cellIndex}-${cell}`}>{cell}</Cell>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
