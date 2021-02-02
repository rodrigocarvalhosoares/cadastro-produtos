import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpactity, Button, Image, Text } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

const CadastroScreen = () => {

  const navigation = useNavigation();
  
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [modelo, setModelo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [img, setImg] = useState('');

  const saveProduct = () => {

    if(!titulo.trim() === ""){
      axios.post('http://10.0.0.2:3000/products', {
        titulo,
        modelo,
        quantidade,
        img
      }).then((res) => {
        alert('Salvo com sucesso')

        navigation.navigate('Home', { res })
      }).catch((error) => alert('Erro ao salvar: ' + error))
    } else {
      alert('O título é obrigatório. Preencha e tente novamente');
    }
  }

  useEffect(() => {

  }, []);

  return (
    <View style={{ padding: 20, alignItems: 'center'}}>
      <Image source={{ uri: img? img : null }} style={{ width: 100, height: 100, borderRadius: 50, borderColor: '#545454'}} />

      <TouchableOpactity onPress={() => ImagePicker.showImagePicker({}, (res) => setImg(res.uri))}>
        <Text>Carregar Imagem</Text>
      </TouchableOpactity>

      <TextInput
        value={titulo}
        onChangeText={(txt) => setTitulo(txt)}
        placeholder="Título"
        style={{ fontSize: 16, marginTop: 10, borderWidth: 1, width: '100%', height: 45 }}
        placeholderTextColor='#5a5a5a' 
      />

      <TextInput value={categoria} onChangeText={(txt) => setCategoria(txt)} placeholder="Categoria" style={{ fontSize: 16, marginTop: 10, borderWidth: 1, width: '100%', height: 45 }}/>
      <TextInput value={modelo} onChangeText={(txt) => setModelo(txt)} placeholder="Modelo" style={{ fontSize: 16, marginTop: 10, borderWidth: 1, width: '100%', height: 45 }}/>
      <TextInput value={quantidade} onChangeText={(txt) => setQuantidade(txt)} placeholder="Quantidade" style={{ fontSize: 16, marginTop: 10, borderWidth: 1, width: '100%', height: 45 }}/>

      <Button title="Cadastrar" onPress={saveProduct} />
    </View>
  )
}

export default CadastroScreen;