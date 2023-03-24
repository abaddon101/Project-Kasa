import styles from "../Tags/Tags.scss";

function Tags({ tags }) {
  return (
    <ul className="logementCardTagWrapper">
      {tags.map((tag, index) => {
        return (
          <li className="logementCardTagList" key={index}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
export default Tags;
