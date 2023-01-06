import "./output.css";

const Output = ({ res }) => {
  return (
    <div className="container-output">
        <div className="res-container">
            <h2 className="res">{res}</h2>
        </div>
    </div>
  )
}

export default Output