function Table(props) {
    // mycustom table
    const rows = props.links.map((data, index) => (
      <tr>
        <td>{data.name}</td>
        <td>{data.URL}</td>
      </tr>
    ));
  
    return (
      <table>
        <thead>
          <tr>
            <th>Link Name</th>
            <th>Link URL</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
  
  export default Table