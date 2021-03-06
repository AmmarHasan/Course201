/**
 * Created by Muhammad on 1/1/14.
 */

// For conciseness. See the "Building Parts" intro page for more
function init(){
    console.log("HEre");
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    diagram =
        $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
            { allowDrop: true });  // must be true to accept drops from the Palette


    diagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "RoundedRectangle",
                { fill: "white" },
                new go.Binding("fill", "color")),  // shape.fill = data.color
            $(go.TextBlock,
                { margin: 5 },
                new go.Binding("text", "key"))  // textblock.text = data.key
        );

    diagram.linkTemplate =
        $(go.Link,
            $(go.Shape,
                new go.Binding("stroke", "color"),  // shape.stroke = data.color
                new go.Binding("strokeWidth", "thick")),  // shape.strokeWidth = data.thick
            $(go.Shape,
                { toArrow: "OpenTriangle", fill: null },
                new go.Binding("stroke", "color"),  // shape.stroke = data.color
                new go.Binding("strokeWidth", "thick"))  // shape.strokeWidth = data.thick
        );

    var nodeDataArray = [
        { key: "Alpha", color: "lightblue" },
        { key: "Beta", color: "pink" }
    ];
    var linkDataArray = [
        { from: "Alpha", to: "Beta", color: "blue", thick: 2 }
    ];
    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
}