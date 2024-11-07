export default function json2html(data) {
  // Determine all unique column headers across data objects
  const headers = Array.from(
    data.reduce((set, obj) => {
      Object.keys(obj).forEach(key => set.add(key));
      return set;
    }, new Set())
  );

  // Start building the HTML table with data-user attribute
  let html = `<table data-user="adhityaram1804@gmail.com"><thead><tr>`;
  
  // Create table headers
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr></thead><tbody>`;

  // Create rows for each object in data
  data.forEach(row => {
    html += `<tr>`;
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    html += `</tr>`;
  });

  // Close the table
  html += `</tbody></table>`;
  
  return html;
}
