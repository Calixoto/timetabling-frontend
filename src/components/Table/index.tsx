import { Td } from "./body";

const tableHead = ["Horário", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const tableColumns = ["M12", "M34", "M56", "T12", "T34", "T56", "N12", "N34"];

export const Table = () => {
  return (
    <table cellPadding={16} cellSpacing={16} className="bg-input rounded-md">
      <tr>
        {tableHead.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
      {tableColumns.map((item) => (
        <tr key={item}>
          <td>{item}</td>
          {Array.from({ length: 6 }).map((_, index) => (
            <Td key={index} />
          ))}
        </tr>
      ))}
    </table>
  );
};
