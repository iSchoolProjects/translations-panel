import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import {RootState} from '../../store';
import {TypeEnum} from '../../store/slices/common.slice';

export default function Toaster() {
    const {message} = useSelector((state: RootState) => state.common);
    const dispatch = useDispatch();
    useEffect(() => {
        toast(message?.text, {
            type: message?.type ?? TypeEnum.success,
        });
    }, [message, dispatch]);
    if (!message) return null;
    return (
        <div className="toster-parent">
            <ToastContainer position="top-right" autoClose={2000} closeOnClick pauseOnFocusLoss draggable pauseOnHover/>
        </div>
    );
}
