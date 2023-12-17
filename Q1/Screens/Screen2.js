import {Text,TextInput,View,StyleSheet, Button} from 'react-native'

const Screen2 = ()=>{
    
    const updateValues = ()=>{
        console.log('Update Values')
    }
    
    return(
        <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.title}>Registration</Text>

      <TextInput
      value='name'
      />
      
      <TextInput
      value='reg'
      />

        <Button
        title='Update Values'
        onPress={updateValues}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    title: {
       fontSize: 24,
       fontWeight: 'bold',
    },
   });

export default Screen2;