import "./article.css";

const Article = () => {
  return (
    <article className="article-container">
      <div>
      <h2 className="article-title">How it works?</h2>
      <ol className="list-container">
        <li>The inputs are passed as arguments into a function</li>
        <li>
          I then create a map as the data structure that will store the
          characters of the string as keys and the frequency of the character as
          the value
        </li>
        <li>I iterate through the string and store the keys and values</li>
        <li>
          I then iterate through the second string and for every key that is in
          the map, its frequency will be decremented by 1
        </li>
        <li>
          The final step is to iterate thrugh the values and check if a value is
          not equal to 0 then return false
        </li>
        <li>If the above step did not return false, then return true</li>
      </ol>
      </div>
    </article>
  );
};

export default Article;
