import React from 'react';
import { Modal, ModalProps, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';


interface Props extends ModalProps {
  discord: string;
  onCloseModal: () => void;
}

export function DuoMatch({ discord, onCloseModal, ...rest }: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType='fade' {...rest}
    >
      <View style={styles.container}>

        <View style={styles.content}>

          <TouchableOpacity style={styles.closeIcon} onPress={onCloseModal}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="lets play"
            subtitle='Agora é so começar a jogar!'
            style={styles.heading}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity style={styles.discordButton}>
            <Text style={styles.discord}>
              {discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}