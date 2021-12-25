import React from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/flatbutton";
import { FontAwesome } from "@expo/vector-icons";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              autoCapitalize={"words"}
              style={styles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              onBlur={props.handleBlur("title")}
              value={props.values.title}
            />

            <Text style={styles.errorText}>
              {props.touched.title &&
                props.errors.title &&
                `* ${props.errors.title}`}
            </Text>

            <TextInput
              autoCapitalize={"sentences"}
              style={styles.input}
              multiline
              numberOfLines={5}
              maxLength={250}
              placeholder="Review details"
              onChangeText={props.handleChange("body")}
              onBlur={props.handleBlur("body")}
              value={props.values.body}
            />
            <Text style={styles.errorText}>
              {props.touched.body &&
                props.errors.body &&
                `* ${props.errors.body}`}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              onBlur={props.handleBlur("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={styles.errorText}>
              {props.touched.rating &&
                props.errors.rating &&
                `* ${props.errors.rating}`}
            </Text>

            <FlatButton onPress={props.handleSubmit} text={"add"} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  input: {
    paddingHorizontal: 10,
    fontFamily: "obitron",
    paddingVertical: 8,
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "white",
    marginHorizontal: 8,
    marginVertical: 3,
  },
  errorBox: {
    flexDirection: "row",
  },
  errorText: {
    color: "deeppink",
    marginLeft: 10,
    marginBottom: 5,
  },
});
