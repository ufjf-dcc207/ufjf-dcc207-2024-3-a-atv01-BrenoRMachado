import "./Disciplina.css";

function Disciplina(){
        const codigo = "DCC207";
        const nome = "Desenvolviemnto Web Front-End"
    return (
        <div className="disciplina">
            <div>{codigo}</div>
            <div>{nome}</div>
        </div>
    );
}

export default Disciplina;