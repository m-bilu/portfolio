import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProjectCard = () => {
    return(
        
        <div className='flex'>
                
            <div className='px-5 font-quicksand font-bold bg-gradient-to-r from-teal-600 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                PROJECTS 
            </div>

            {/* Actual Text Below*/}



                



            <div className=''>


                {/*/////////////////////////////////////////////////////////*/}



                <Link href='https://www.kaggle.com/code/billuu/house-prices-5'>                    
                    
                    <div className='flex justify-between'>
                        <div>
                            <div className='workTitleStyle text-3xl'>
                                Kaggle Hackathon: House Prices Prediction, Top Placement
                            </div>
                            <div className='workTitleStyle'>
                                | 04 2023 
                            </div>
                            <div className='workTitleStyle'>
                                | Python, Pandas, Numpy, Sci-Kit Learn, Pytorch, Tensorflow, Keras
                            </div>
                        </div>


                    </div>

                </Link>

                <div className='font-quicksand py-10'>
                Used supervised regression techniques such as LASSO regularization, k-fold validation, gradient boosting and hyperparameter optimization to model house prices in Iowa. Using Matplotlib, SciKit-Learn, Pandas and  Numpy. Models yield MSE in top 12%. Final solutions using XGBoost, Random Forest, SVM and Artificial Neural Networks. Manual feature selection, feature engineering, data preprocessing and cleaning.
                </div>


                    


                    {/*/////////////////////////////////////////////////////////*/}


                    <Link href='/'>                    

                            <div className='flex justify-between'>
                                <div>
                                    <div className='workTitleStyle text-3xl'>
                                        Personal Website
                                    </div>
                                    <div className='workTitleStyle'>
                                        | 10 2023
                                    </div>
                                    <div className='workTitleStyle'>
                                        | Javascript, Next.JS, HTML, Tailwind CSS, Firebase, Three.js, Vercel
                                    </div> 
                                </div>


                            </div>

                        </Link>

                        <div className='font-quicksand py-10'>
                            Developed a full-stack portal into my life as a developer, a statistician, and a student. Stack includes Next.JS, Tailwind CSS for front-end design and styling, Firebase for back-end database holding descriptions and card-specific instructions for easy content updating.
                            Currently working on Three.JS implementation with background blender model, along with Medium article embeddings and interactable demo embeddings for my projects.
                        </div>


                    
                    {/*/////////////////////////////////////////////////////////*/}



                    <Link href='https://github.com/m-bilu/CxC-Wyvern'>                    

                        <div className='flex justify-between'>
                            <div>
                                <div className='workTitleStyle text-3xl'>
                                CxC Hackathon - Geospatial Crop Classification
                                </div>
                                <div className='workTitleStyle'>
                                    | 02 2023
                                </div>
                                <div className='workTitleStyle'>
                                    | Tensorflow, Keras, GeoPandas, ArcGIS, GCP
                                </div>
                            </div>


                        </div>

                    </Link>

                    <div className='font-quicksand py-10'>
                    Managed a large data pipeline consisting of TIFF and GeoJSON files holding 32 bands of geospatial imagery with Python's open source tools - Numpy, GeoPandas. Produced a computer vision model classifying crop types in Central Valley, California. Deployed model on Google Cloud.               
                    </div>



                    {/*/////////////////////////////////////////////////////////*/}



                    <Link href='https://github.com/m-bilu/chess-project'>                    

                        <div className='flex justify-between'>
                            <div>
                                <div className='workTitleStyle text-3xl'>
                                Chess Game, Human and AI[1-3]
                                </div>
                                <div className='workTitleStyle'>
                                    | 11 2021 -- 12 2021
                                </div>
                                <div className='workTitleStyle'>
                                    | C, C++, VIM, GBD, Unix
                                </div>
                            </div>


                        </div>

                    </Link>

                    <div className='font-quicksand py-10'>
                    Employed C++ design patterns w/ UML planning such as the Observer, Decorator, MVC, Visitor patterns, X11 Graphics, STL data structures like vectors, iterators, smart pointers, safe exception handling and advanced AI/artificial intelligence algorithms to implement 3 levels of difficulty in a Chess game. GitHub for version control.                    
                    </div>





                    


            </div>




        </div>
    
    )
}

export default ProjectCard

