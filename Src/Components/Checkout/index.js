import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      city: '',
      postCode: '',
      value: false
    };
    this.moved = false;
  }

  onChange = () => {
    this.setState({ value: !this.state.value })
  }
  render() {
    const { lastName, firstName, email, phone, country, address, city, postCode, value } = this.state
    return (
      <>
        <View style={Styles.mainContainer}>
          <Text style={{ width: '75%' }}>
            <Text style={Styles.cartProductName}>{"6 product + shipping  to Israel (157 gr) + "}</Text>
            <Text style={Styles.cartProductName1}>{" 37 points for a discount on a future purchase"}</Text>
          </Text>
          <Text style={Styles.priceTotal}>{"$153.77"}</Text>
        </View>
        <View style={Styles.mainContainer}>
          <Image source={Images.tick} style={Styles.tickImage} />
          <Text style={{ width: '90%' }}>
            <Text style={[Styles.cartProductName, { textDecorationLine: 'underline' }]}>{"Dear customers:"}</Text>
            <Text style={Styles.cartProductName}>{"we will send your order with Ukrposhta (The Ukrainian Post office). The postal office in your country will transfer the package to you. the time for delivery's depend on your postal office company and we can't know the time for receiving the order."}</Text>
          </Text>
        </View>

        <View style={Styles.seperatorCart} />
        {/* First */}
        <View style={Styles.orderContainer}>
          <View style={Styles.emailWrapper}>
            <TextInput
              style={Styles.emailInput}
              value={firstName}
              placeholder={'First Name:'}
              placeholderTextColor={Colors.emailColor}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(value) => {
                this.setState({ firstName: value })
              }}

            />
          </View>
          <View style={Styles.emailWrapper}>
            <TextInput
              style={Styles.emailInput}
              value={lastName}
              placeholder={'Last Name:'}
              placeholderTextColor={Colors.emailColor}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(value) => {
                this.setState({ lastName: value })
              }}

            />
          </View>
        </View>

        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={email}
            placeholder={'E-mail'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ email: value })
            }}

          />
        </View>


        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={phone}
            placeholder={'Phone'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ phone: value })
            }}

          />
        </View>



        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={country}
            placeholder={'Country / Region'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ country: value })
            }}

          />
        </View>

        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={address}
            placeholder={'Street Address'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ address: value })
            }}

          />
        </View>


        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={city}
            placeholder={'Town / City'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ city: value })
            }}

          />
        </View>



        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput}
            value={postCode}
            placeholder={'Postcode /ZIP'}
            placeholderTextColor={Colors.emailColor}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => {
              this.setState({ postCode: value })
            }}

          />
        </View>

        <View style={Styles.orderCheckContainer}>
          <CheckBox
            disabled={false}
            value={value}
            onValueChange={this.onChange}
            boxType='square'
            onCheckColor={Colors.darkPink}
            onTintColor={Colors.darkPink}
            tintColor={'#DADFE6'}
            style={{
              marginTop: 5,
              width: hp(2.5),
              height: hp(2.5),
            }}
          />
          <Text style={[Styles.cartProductName, {
            marginLeft: hp(3), 
            width: '55%'
          }]}>{"I have read and agree to the website terms and conditions *"}</Text>
        </View>


        <TouchableOpacity style={Styles.cartButton}>

          <Text style={Styles.cartText}>{"Please Order"}</Text>

        </TouchableOpacity>
      </>
    );
  }
}

export default Checkout;