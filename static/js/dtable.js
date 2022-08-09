//add tabulator to table
var table = new Tabulator("#dataTable", {
  formatter: "html",
  columns: [
      {
          title: "Organismos",
          field: "Organismos",
          width: "100%",
          formatter: "html",
          headerFilter: "input",
          headerFilterPlaceholder: "Buscar...",
          headerFilterParams: {
              values: true
          }
      },]
});