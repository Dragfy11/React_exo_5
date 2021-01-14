import './App.css';
import Profil from './components/Profil';

function App() {
  return (
    <div>
      <Profil prenom="Nicolas" famille="Primo" description="WebDev" />
      <Profil prenom="Martin"  description = "Chimiste" />
      <Profil prenom="Beyonce" description = "Chanteuse"/>
      <Profil prenom="Kadir" description = ""/>
    </div>
  );
}

export default App;
