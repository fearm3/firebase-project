import { Table} from 'semantic-ui-react';


const Contacts = () => {
 
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size={'large'} className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
     
      </Table>
    </div>
  );
};

export default Contacts;