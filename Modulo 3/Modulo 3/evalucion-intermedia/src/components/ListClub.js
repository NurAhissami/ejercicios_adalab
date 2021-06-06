import Club from './Club';
import ClubMembers from './ClubMembers';
import clubs from '../data/clubs.json';

function ListClub() {
  return (
    <ul>
      {clubs.map((club, idx) => (
        <li key={idx}>
          <Club name={club.name} icon={club.fa}>
            <ClubMembers members={club.members} />
          </Club>
        </li>
      ))}
    </ul>
  );
}

export default ListClub;
