import { useEffect } from "react";
import { selectUsersDetails, selectUsersLoading, selectUsersError } from "../../app/storeSelectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../users/usersSlice";

export const UserView = () => {

    const userList = useSelector(selectUsersDetails);
    const isLoading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())

    }, [])

    return (
        <div>
            <h3>List of Users- {!isLoading ? userList?.length : '...'}</h3>
            {isLoading && <div>Loading...</div>}
            {error && !isLoading ? <>Error:{error}</> : <></>}
            <ul>
                {
                    userList?.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>

        </div>
    );
};
