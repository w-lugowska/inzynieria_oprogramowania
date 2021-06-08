export function CustomRow({ elements, isHead }) {
  return (
    <tr key={elements.id}>
      {elements.map((element, index) =>
        isHead ? <th key={index}>{element}</th> : <td key={index}>{element}</td>
      )}
    </tr>
  );
}
