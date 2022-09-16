import { GameController } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd?: string;
  hourStart?: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
  onConnect: () => void;
}

export function DuoCard({ name, hourStart, hourEnd, weekDays, yearsPlaying, useVoiceChannel, onConnect }: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${yearsPlaying}  ${yearsPlaying === 1 ? 'ano' : 'anos'}`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays.length} ${weekDays.length === 1 ? 'dia' : 'dias'} \u2022 ${hourStart}h - ${hourEnd}h`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          size={20}
          color={THEME.COLORS.TEXT}
        />

        <Text style={styles.buttonTitle}>Conectar</Text>

      </TouchableOpacity>


    </View>
  );
}