import PropTypes from 'prop-types';

function ClubMembers({members}) {
  return (
    <ul>
      {members.map((member, idx) => (
        <li key={idx}>{member}</li>
      ))}
    </ul>
  );
}

ClubMembers.defaultProps = {
  members: ['No members'],
};

ClubMembers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string),
};

export default ClubMembers;
