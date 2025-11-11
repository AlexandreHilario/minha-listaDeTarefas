import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  function removerAtividade(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  return (
    <div 
      className="bg-light d-flex justify-content-center align-items-center" 
      style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
      }}
    >
      <div className="p-4 bg-white rounded shadow w-100" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4">Minha Lista de Tarefas</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nova tarefa"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        <ul className="list-group">
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {tarefa}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removerAtividade(index)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
