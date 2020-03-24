import React from "react";
import {IconFA} from "../Common/IconFA";
import  {PostCreation} from "../../data/post/types";
import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import {message} from "antd";

type FormValues = {
    description: string
    private: boolean
    draft: boolean
    feed: number
    linkedClub?: number
}

const InnerForm: React.FC<FormikProps<FormValues>> = ({isSubmitting}) => {
    return (
        <Form className="flex flex-col items-center">
            <div className="flex flex-col bg-white rounded-lg w-4/6 h-20 py-3 px-4 text-gray-500">
                <Field type="textarea" name="description" placeholder="What's on your mind ?" className="text-gray-800 flex-1 bg-transparent resize-none"/>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <IconFA name="fa-images" className="cursor-pointer mx-1 hover:text-gray-700"/>
                        <IconFA name="fa-chart-bar" className="cursor-pointer mx-1 hover:text-gray-700"/>
                    </div>

                    <div>
                        <button type="submit" className="cursor-pointer hover:text-gray-700" disabled={isSubmitting}>
                            <IconFA name={isSubmitting ? "fa-circle-notch fa-spin" : "fa-paper-plane"} type="solid"/>
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

type PostFormProps = {
    feedId: number
    sendPost: (post: PostCreation) => Promise<boolean>
}

const PostForm = withFormik<PostFormProps, FormValues>({
    mapPropsToValues: (props) => {
        return {
            description: "",
            feed: props.feedId,
            private: true,
            draft: true
        };
    },

    validate: (values: FormValues) => {
        let errors: FormikErrors<any> = {};
        if (!values.description) {
            errors.description = 'Required';
        }
        return errors;
    },

    handleSubmit: async (values, {props, resetForm}) => {
        const success = await props.sendPost(values);
        if(success) {
            resetForm({});
            message.success("Post publié !");
        }
    },
})(InnerForm);


export default PostForm;