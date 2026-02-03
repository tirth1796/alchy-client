import { Text } from '@/components/ui/text';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

interface CreditCardProps {
  brand: string;
  bank: string;
  owner: string;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  colors?: [string, string];
}

export const CreditCard = ({ brand, bank, owner, last4, expiryMonth, expiryYear, colors }: CreditCardProps) => {
  const gradientColors = colors || ['#374151', '#1f2937'];

  return (
    <View className="rounded-xl shadow-lg mb-6 mx-auto" style={{ aspectRatio: 1.585, width: '100%', maxWidth: 400 }}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-xl flex-1"
      >
        <View className="flex-1 justify-between p-6">
          <View className="flex-row justify-between items-start">
            <Text className="text-white font-semibold text-lg">{bank}</Text>
            <Text className="text-white font-bold text-xl">{brand}</Text>
          </View>
          <View>
            <Text className="text-white text-2xl font-mono tracking-widest mb-4">
              **** **** **** {last4}
            </Text>
            <View className="flex-row justify-between">
              <Text className="text-white text-base opacity-80">
                {owner}
              </Text>
              <Text className="text-white text-base opacity-80">
                {expiryMonth}/{expiryYear}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};