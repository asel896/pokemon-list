import { useQuery} from "@tanstack/react-query";

type User= {
    id:string;
    name:string;

};

export const useUsers = () => {
    return useQuery <User[]>({
        queryKey: ["usersData"],
        queryFn: () =>
            fetch("http://localhost:3001/users").then((res)=> res.json()),
    });

};

