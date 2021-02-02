import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpactity, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import axios from 'axios';

const HomeScreen = () => {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  const route = useRoute();

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/products').then((res) => {
      setProducts(res.data)
    }).catch((error) => alert('Erro ao requisitar produtos: ' + error));
  }, [route.params?.res]); 

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontSize: 20 }}>Cadastro de Estoque</Text>

        <TouchableOpactity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ fontSize: 15, color: 'blue' }}>Cadastrar</Text>
        </TouchableOpactity>
      </View>

      <FlatList 
        style={{ padding: 20 }}
        keyExtractor={(item, index) => item.id.toString()}
        data={products}
        renderItem={({item}) => (
          <TouchableOpactity onPress={() => alert(item.id)} style={{ flexDirection: 'row', backgroundColor: 'white', marginBottom: 5}}>
            <Image
              source={{ uri: item.img ? item.img : null }}
              style={{ width: 100, height: 100, margin: 10, borderRadius: 50 }}  
            />

            <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
              <Text>Produto: {item.titulo}</Text>
              <Text>Modelo: {item.modelo}</Text>
              <Text>Categoria: {item.categoria}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
            </View>
          </TouchableOpactity>
        )}
      />
    </View>
  );

}

export default HomeScreen;