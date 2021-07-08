import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {fetchUsers,selectAllUsers} from '../store/slice/sliceUser'
import { useEffect } from "react";
import { ActivityIndicator,View,Button,Text,StyleSheet,Image } from "react-native";
import {store} from '../store/newIndex'

const UserPage = () => {
  // const dispatch = useDispatch();
  // const { users, loading } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.users);
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if(loading){
    return <ActivityIndicator size="large" style={styles.loader} ></ActivityIndicator>
  }

  return (
    <View>
      <Button title={'Reload'} onPress={() => store.dispatch(fetchUsers())} />
      {users.map((user) => {
        return (
          <View style={styles.container} key={user.id}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View>
              <View style={styles.dataContainer}>
                <Text>Name: </Text>
                <Text>{user.first_name}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>Last Name: </Text>
                <Text>{user.last_name}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>Email: </Text>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default UserPage

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10
  }
});

