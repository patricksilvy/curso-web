import Navegador from "@/components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
    }}>
      <Navegador text="Estiloso" direction="/estiloso" color="violet"/>
      <Navegador text="Exemplo" direction="/exemplo"/>
      <Navegador text="Jsx" direction="/jsx" color="crimson"/>
    </div>
  )
}