import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'; 
import repositories from '../data/repositories.js';

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text/> }
            renderItem={({ item: repo }) => ( 
                <View key={repo.id}>
                    <Text>id: {repo.id}</Text>
                    <Text>Nombre: {repo.fullName}</Text>
                    <Text>Descripcion: {repo.description}</Text>
                    <Text>Lenguaje: {repo.language}</Text>
                    <Text>Estrelas: {repo.stargazersCount}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Review: {repo.reviewCount}</Text>
                    <Text>Puntuacion: {repo.ratingAverage}</Text>
                </View>
            )}

        >
            
                </FlatList>
            )
            
}

export default RepositoryList