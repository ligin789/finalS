import { View, Text ,Button} from 'react-native'
import React from 'react'

const Category = (props:any) => {
  return (
    <View>
      <Text>Category</Text>
      <Button title="Head" onPress={() => props.navigation.navigate('List')}></Button>
    </View>
  )
}

export default Category
