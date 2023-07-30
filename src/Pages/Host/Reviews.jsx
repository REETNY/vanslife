import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

export default function Reviews(){

    let func  = useOutletContext()
    let genNum = Math.floor(Math.random() * 10);
    let [ratings, setRatings] = useState([]);
    let maxRating = useRef(0)

    let tDay = new Date().toString().slice(0,15);
    let fDay = localStorage.getItem("oldDate") || "";

    function genReviews(){
        
        let tDay = new Date().toString().slice(0,15);

        let allReviews = [
            {"5strs": `${Math.floor(Math.random() * 25 + 5)}`},
            {"4strs": `${Math.floor(Math.random() * 25 + 5)}`},
            {"3strs": `${Math.floor(Math.random() * 25 + 5)}`},
            {"2strs": `${Math.floor(Math.random() * 25 + 5)}`},
            {"1strs": `${Math.floor(Math.random() * 25 + 5)}`}
        ]
        localStorage.setItem("userReviews", JSON.stringify(allReviews));
        localStorage.setItem("oldDate", tDay);
        return allReviews
    }

    let all_reviews;

    useEffect(() => {

        if(fDay == tDay){
            let userReviews = JSON.parse(localStorage.getItem("userReviews"));
            all_reviews = (calRevs(userReviews))
        }else{
            let userReviews = genReviews();
            all_reviews = (calRevs(userReviews))
        }

        setRatings(all_reviews)

        func()
    }, [genNum])

    function calRevs(arr){
        let totalRating = 0;

        arr.map((obj) => {
            totalRating += parseFloat(obj[Object.keys(obj)[0]])
        })

        let ratingDone = arr.map((item) => {
            let num = parseFloat(item[Object.keys(item)[0]]);
            let key = Object.keys(item)[0];
            let obj = {};
            obj[key] = `${(num*100/totalRating).toFixed(2)}`;
            return obj
        })


        let overAll = 0;

        arr.map((item) => {
            let numPer = parseFloat(item[Object.keys(item)[0]]);
            let key = Object.keys(item)[0];
            let keyNum = parseFloat(key.slice(0, 1))
            overAll += (numPer/100*keyNum);
            maxRating.current = ((overAll).toFixed(2))
        })

        return ratingDone;
    }

    return(
        <section className="user_reviews_gotten">

            <div className="user_review_head">
                <span className="review_head">Your Reviews</span>
                <span className="last_activity_extn">last <span className="user_underLine">30 days</span> </span>
            </div>

            <div className="all_accumulated_rating">
                <span className="overall_rated">
                    {maxRating == 0 ? " -- " : `${maxRating.current}`}
                </span>
                <span className="golden_star"><FaStar /></span>
                <span className="overall_rating_text">overall rating</span>
            </div>

            <div className="review_auto_tab_filler">

                <div className="each_auto_tab">
                    <span className="rated_what">5.0 stars</span>
                    <div className="tab_filler-tab_filler">
                        {ratings.length > 0 ?<span style={{width: `${ratings[0]["5strs"]}%`, 
                        transition: "width 1.5s linear 2s"}} className="filler_absolute"></span> : <span className="filler_absolute"></span>}
                    </div>
                    <span className="what_percentage">{ratings.length > 0 ? `${Math.floor(ratings[0]["5strs"])}%` : "0%"}</span>
                </div>

                <div className="each_auto_tab">
                    <span className="rated_what">4.0 stars</span>
                    <div className="tab_filler-tab_filler">
                        {ratings.length > 0 ? <span style={{width: `${ratings[1]["4strs"]}%`,
                        transition: "width 1.5s linear 2.5s"}} className="filler_absolute"></span> : <span className="filler_absolute"></span>}
                    </div>
                    <span className="what_percentage">
                        {ratings.length > 0 ? `${Math.floor(ratings[1]['4strs'])}%` : "0%"}
                    </span>
                </div>

                <div className="each_auto_tab">
                    <span className="rated_what">3.0 stars</span>
                    <div className="tab_filler-tab_filler">
                        {ratings.length > 0 ? <span style={{width: `${ratings[2]["3strs"]}%`,
                        transition: "width 1.5s linear 3s"}} className="filler_absolute"></span>  : <span className="filler_absolute"></span>}
                    </div>
                    <span className="what_percentage">
                        {ratings.length > 0 ? `${Math.floor(ratings[2]["3strs"])}%` : "0%"}
                    </span>
                </div>

                <div className="each_auto_tab">
                    <span className="rated_what">2.0 stars</span>
                    <div className="tab_filler-tab_filler">
                        {ratings.length > 0 ? <span style={{width: `${ratings[3]["2strs"]}%`,
                        transition: "width 1.5s linear 3.5s"}} className="filler_absolute"></span> : <span className="filler_absolute"></span>}
                    </div>
                    <span className="what_percentage">
                        {ratings.length > 0 ? `${Math.floor(ratings[3]["2strs"])}%` : "0%"}
                    </span>
                </div>

                <div className="each_auto_tab">
                    <span className="rated_what">1.0 stars</span>
                    <div className="tab_filler-tab_filler">
                        {ratings.length > 0 ? <span style={{width: `${ratings[4]["1strs"]}%`,
                        transition: "width 1.5s linear 4s"}} className="filler_absolute"></span> : <span className="filler_absolute"></span>}
                    </div>
                    <span className="what_percentage">
                        {ratings.length > 0 ? `${Math.floor(ratings[4]["1strs"])}%` : "0%"}
                    </span>
                </div>

            </div>

            <div className="reviews_shown_cont">
                <div className="reviews_shown_head">Reviews (2)</div>

                <div className="all_reviews_gotten_cont">

                    <div className="eachReview_user">

                        <div className="stars_rated">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div className="stars_rated_details">
                            <span className="sus_user_name">Elliot</span>
                            <span className="sus_user_date">December 1, 2023</span>
                        </div>
                        <div className="sus_rate_text_info">
                            The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
                        </div>
                    </div>

                    <div className="eachReview_user">

                        <div className="stars_rated">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div className="stars_rated_details">
                            <span className="sus_user_name">Sandy</span>
                            <span className="sus_user_date">November 23, 2023</span>
                        </div>
                        <div className="sus_rate_text_info">
                            This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}