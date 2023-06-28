import ConceptItem from "./ConceptItem";

function Concepts(props) {
  return (
    <div>
      <ul id="concepts">
        <ConceptItem
          image={props.concepts[0].image}
          title={props.concepts[0].title}
          description={props.concepts[0].description}
        ></ConceptItem>
        <ConceptItem
          image={props.concepts[1].image}
          title={props.concepts[1].title}
          description={props.concepts[1].description}
        ></ConceptItem>
        <ConceptItem
          image={props.concepts[2].image}
          title={props.concepts[2].title}
          description={props.concepts[2].description}
        ></ConceptItem>
      </ul>
    </div>
  );
}

export default Concepts;
