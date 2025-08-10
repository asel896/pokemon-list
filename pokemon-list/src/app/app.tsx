import { useUsers } from "./useUsers";

const App = () => {

const { data: users } = useUsers();

return <ul>{users?.map((user) => <li>{user.name}</li>)}</ul>;
};

export default App;