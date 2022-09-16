/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Image, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/logo-nlw-esports.png';
import { useNavigation } from '@react-navigation/native';
import { Background, GameCard, GameCardProps, Heading } from '../../components';
import { styles } from './styles';
import { THEME } from '../../theme';

interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Games[]>([]);

  const navigation = useNavigation();

  function toGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  function fetchData() {
    fetch('http://192.168.17.192:5556/games')
      .then(response => response.json())
      .then((data) => setGames(data));

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>

      <SafeAreaView style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        {loading
          ? <ActivityIndicator size={20} color={THEME.COLORS.TEXT} />
          : <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GameCard {...item} onPress={() => toGame(item)} />}
          />
        }
      </SafeAreaView>
    </Background>
  );
}