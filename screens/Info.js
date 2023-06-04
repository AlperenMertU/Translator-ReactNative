import React from 'react';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';


const Info = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.infoText}>
                    <Text style={styles.h1}>Goktürk Alfabesi Hakkında</Text>

                    <Image source={require("../assets/alphabet.png")}
                        style={styles.image1}
                    />

                    <Text style={styles.p}>
                        Göktürk Alfabesi Türk dilinin en eski yazı sistemidir. Sağdan sola doğru yazılır. 4 ünlü, 25 ünsüz ve 9 çift sesli olmak üzere toplam 38 harfden oluşur ve çoğu ünzüz harflerin kalın ve ince seslileri vardır. Orhun Yazıtları bu alfabe ile yazılmıştır.
                        Burada alfabe tablosunu, hece ve yazım örneklerini ve Orhun Yazıtları'ndan orijinal örnekleri inceleyebilir, ve bu alfabenin 1890'larda Danimarka'lı dilbilimci Vilhelm Thomsen tarafından ilk deşifre ediliş süreci hakkında da bilgi edinebilirsiniz.
                    </Text>



                    <Text style={styles.h1}>Ünsüzlerin Kuralları</Text>

                    <Image source={require("../assets/rules1.png")}
                        style={styles.image2}
                    />

                    <Text style={styles.p}>
                        Göktürk Alfabesi'nde 10 ünsüz harfin kalın ve ince biçimi vardır. Bu dilimizdeki "büyük ünlü uyumu" kuralı ile bağlantılıdır.
                        Büyük-küçük biçimi olan ünsüzlerin kullanımı şöyledir; Bir sözcüğün ilk hecesinde bir kalın ünlü (A, I, O, U) var ise, ünsüzler de "kalın" biçimi ile yazılır. Sözcüğün ilk hecesinde bir ince ünlü (E, İ, Ö, Ü) var ise ünsüzler de ince biçimi ile yazılır.
                        Örneğin; "BODuN" sözcüğü 𐰉𐰆𐰑𐰣 yazılır, bu sözcüğün ilk hecesindeki "O" kalın bir ünlü olduğu için, aynı hecede bulunan "B" sesinin de "kalın" biçimi 𐰉 yazılır.
                        Bir başka örnek; "TİGiN" sözcüğü 𐱅𐰃𐰏𐰤 yazılır. Bu sözcüğün ilk hecesinde bir ince ünlü olan "İ" bulunur. Bunun için o hecedeki "T" ünsüzünün de "ince" biçimi 𐱅 yazılır.
                    </Text>

                    <Text style={styles.h2}>
                        Normal Ünsüzler
                    </Text>
                    <Image source={require("../assets/rules2.png")}
                        style={styles.image2}
                    />
                    <Text style={styles.p}>
                        Kalın - ince ayrımı olmayan; Ç, M, P, Ş, Z ünsüzleri, tüm ünlüler ile hece kurabilirler. Örneğin “ressam” anlamına gelen 𐰋𐰓𐰕𐰲𐰃 "BeDiZÇİ" deki 𐰔 "Z" ve 𐰲 "Ç“ harfleri ile "gümüş" anlamına gelen 𐰚𐰇𐰢𐱁 "KÜMüŞ" deki 𐰢 "M" ve 𐱁 "Ş" harflerinde kalın-ince ayrımı yoktur ve serbestçe yazılırlar.
                    </Text>

                    <Text style={styles.h1}>Ünlülerin Kuralları</Text>

                    <Image source={require("../assets/rules3.png")}
                        style={styles.image2}
                    />

                    <Text style={styles.p}>
                        Göktürk Alfabesi'nde toplam 4 ünlü harf vardır. Türkçe'nin 8 ünlü sesini bu 4 harf karşılar.
                        𐰀 harfi "A" ve "E" seslerini; 𐰃 harfi "I" ve "İ" seslerini; 𐰆 harfi "O" ve "U" seslerini; 𐰇 harfi de "Ö" ve "Ü" seslerini karşılar.
                        Tabloda görülen ilk iki ünlü harf olan 𐰀 A-E ve 𐰃 I-İ, kelime içindeki ünsüzlerin kalınlık - incelik durumlarına göre kolayca ayırt edilebilir. Çünkü bu harflerin kullanıldığı hece, eğer kalın ünsüzler ile yazılmış işe, kalın sesler (A,I) verirler; ince ünlüler ile yazılmış ise, ince sesler (E,İ) verirler.
                        Örneğin: "TaŞRA" sözcüğü 𐱃𐱁𐰺𐰀 yazılır. Sözcüğün başında "T" ünsüzünün "kalın" biçimi 𐱃 yazılıdır. Bu da bize, ardından gelen ünlülerin de kalın sesler vereceğini, sondaki 𐰀 harfinin de böylece "A" sesini vereceğini, "E" sesi vermeyeceğini belirtir.
                        Başka bir örneğe bakalım: "BİLiG" sözcüğünü 𐰋𐰃𐰠𐰏 şeklinde yazarız. Sağ baştaki 𐰋 "B" harfinin ince biçimidir ve ardından gelecek ünlünün de ince olacağını belirtir. Aradaki "L" 𐰠 ve sondaki de "G" 𐰏 de bu harflerin ince biçimleridir, böylece iki ince ünsüzün arasında kalan 𐰃 ünlüsünün ince “İ” sesini vereceğini, "I" sesi vermeyeceğini biliriz.                    </Text>

                    <Text style={styles.h1}>Çift Sesli Ünsüzler</Text>

                    <Image source={require("../assets/rules4.png")}
                        style={styles.image2}
                    />
                    <Image source={require("../assets/rules5.png")}
                        style={styles.image2}
                    />

                    <Text style={styles.p}>
                        sadece "I" dan önce veya sonra, "ık" veya "kı" sesleri vermesi için kullanılır.
                        sadece "O" ve "U" dan önce veya sonra, "ok/uk" veya "ko/ku" sesleri vermesi için kullanılır.
                        sadece "Ö" ve "Ü" dan önce veya sonra, "ök/ük" veya "kö/kü" sesleri vermesi için kullanılır.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 120,
    },
    image1: {
        width: 240,
        height: 365,
    },
    image2: {
        width: 280,
        height: 95,
    },
    infoText: {
        paddingTop: 50,
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    h1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold",
    },
    p: {
        fontSize: 18,
    },
})

export default Info;
