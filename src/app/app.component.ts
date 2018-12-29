import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  width: string;
  height: string;
  ngOnInit() {
    this.width =
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) +
      "px";
    this.height = "500px";
  }
  title = "CodeSandbox";
  columns = [
    { headerName: "Village Name", field: "villageName" },
    { headerName: "Description", field: "description" },
    { headerName: "Year", field: "year" },
    { headerName: "Nos", field: "nos" },
    { headerName: "Unit Cost", field: "unitCost" },
    { headerName: "Village Share", field: "villageShare" },
    { headerName: "Al Share", field: "alShare" },
    { headerName: "Gov Share", field: "govShare" },
    { headerName: "Total", field: "total" },
    { headerName: "Particular", field: "particular" }
  ];

  rows = [
    {
      villageName: "Chhatarpur village",
      description: "Project Name : River Rejuvination",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Project Name : Solid waste Management",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Monitoring",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description:
        "Information Education Communication (for 3 year) River Rejuvenation and Solid waste management",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Human Resource",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Operation and maintainance for SWM",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Administrative expenditure",
      year: "Y1",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Project Name : River Rejuvination",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Project Name : Solid waste Management",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Monitoring",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description:
        "Information Education Communication (for 3 year) River Rejuvenation and Solid waste management",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Human Resource",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Operation and maintainance for SWM",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Chhatarpur village",
      description: "Administrative expenditure",
      year: "Y2",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Project Name : River Rejuvination",
      year: "Y3",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Project Name : Solid waste Management",
      year: "Y4",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Monitoring",
      year: "Y5",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description:
        "Information Education Communication (for 3 year) River Rejuvenation and Solid waste management",
      year: "Y6",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Human Resource",
      year: "Y7",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Operation and maintainance for SWM",
      year: "Y8",
      nos: 100,
      unitCost: 100,
      villageShare: 100,
      alShare: 100,
      govShare: 100,
      total: 100,
      particular: 100
    },
    {
      villageName: "Jainagar",
      description: "Administrative expenditure",
      year: "Y9",
      nos: "",
      unitCost: "",
      villageShare: "",
      alShare: "",
      govShare: "",
      total: "",
      particular: ""
    }
  ];
}
