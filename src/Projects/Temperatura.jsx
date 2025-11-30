import { useState } from "react"

export default function Temp(){
    const[celsius, setCelsius]=useState(null)
    const[fahren, setFahren]=useState(null)
    const[kelvin, setKelvin]=useState(null)

    function handleCelsius(e){
        const value=e.target.value
        setCelsius(value)
        if(value === ''){
            setFahren('')
            setKelvin('')
        }
        const c = parseFloat(value)
        if(isNaN(c))return
        setFahren((c * 9/5 + 32).toFixed(2))
        setKelvin((c + 273.15).toFixed(2))
    }
    function handleFahren(e){
        const value=e.target.value
        setFahren(value)
        if(value=== ''){
            setCelsius('')
            setKelvin('')
        }
        const f = parseFloat(value)
        if(isNaN(f))return
        setKelvin((5/9 * (f - 32) + 273.15).toFixed(2))
        setCelsius(((f - 32) * 5/9).toFixed(2))
    }
    function handleKelvin(e){
        const value=e.target.value
        setKelvin(value)
        if(value===''){
            setCelsius('')
            setFahren('')
        }
        const k = parseFloat(value)
        if(isNaN(k))return
        setCelsius((k- 273.15).toFixed(2))
        setFahren(((k - 273.15) * 9/5 + 32).toFixed(2))
    }

    return(
        <div className="w-screen h-screen border flex justify-center items-center bg-blue-900">
            <div className="rounded-xl w-200 p-10 flex justify-center items-center gap-3 flex-col bg-gradient-to-br from-cyan-50 to-blue-50">
                {celsius &&
                <div className={`w-full py-10 flex justify-center items-center flex-col rounded-lg text-white text-3xl font-bold ${celsius<=0 && 'bg-gradient-to-r from-blue-400 to-blue-600'||celsius>35 && 'bg-gradient-to-r from-orange-500 to-red-600'|| celsius>25 && 'bg-gradient-to-r from-yellow-400 to-orange-500' || celsius>15 && 'bg-gradient-to-r from-green-400 to-green-600' ||  celsius>0 && 'bg-gradient-to-r from-cyan-400 to-blue-500' }` }>
                    <p>{celsius<=0 && '🥶'||celsius>35 && '🔥'|| celsius>25 && '☀️' || celsius>15 && '😊' ||  celsius>0 && '❄️' }</p>
                    <p>{celsius<=0 && 'Inghet'||celsius>35 && 'Foarte Cald'|| celsius>25 && 'Cald' || celsius>15 && 'Placut' ||  celsius>0 && 'Rece' }</p>
                </div>}
                <div className="gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "  >
                    <div className="w-full h-70 rounded-lg p-3 bg-white shadow-xl">
                        <div className="flex justify-between">
                            <p className="font-bold">Celsius</p>
                            <p>🌡️</p>
                        </div>
                        <input onChange={handleCelsius}value={celsius} className="border rounded-md p-1 w-full h-15 text-center mt-3 border-cyan-300 focus:border-cyan-500 focus:outline-none border-2 mb-1 text-2xl" placeholder="0"/>
                        <p className="text-center">°C</p>
                        <div className="flex flex-col items-center gap-1 mt-3 text-gray-500">
                            <p className="text-center">Punctul de inghet: 0°C</p>
                            <p className="text-center">Punctul de fierbere: 100°C</p>
                        </div>
                    </div>

                    <div className="shadow-xl w-full h-70 rounded-lg p-3 bg-white">
                        <div className="flex justify-between">
                            <p className="font-bold">Fahrenheit</p>
                            <p>🌡️</p>
                        </div>
                        <input onChange={handleFahren}value={fahren} className="border rounded-md p-1 w-full h-15 text-center mt-3 border-orange-300 focus:border-orange-500 focus:outline-none border-2 mb-1 text-2xl" placeholder="32"/>
                        <p className="text-center">°F</p>
                        <div className="flex flex-col items-center gap-1 mt-3 text-gray-500">
                            <p className="text-center">Punctul de inghet: 32°F</p>
                            <p className="text-center">Punctul de fierbere: 212°F</p>
                        </div>
                    </div>
                    
                    <div className="shadow-xl w-full h-70 rounded-lg p-3 bg-white sm:col-span-2 md:col-span-1 ">
                        <div className="flex justify-between">
                            <p className="font-bold">Kelvin</p>
                            <p>🌡️</p>
                        </div>
                        <input onChange={handleKelvin}value={kelvin} className="border rounded-md p-1 w-full h-15 text-center mt-3 border-purple-300 focus:border-purple-500 focus:outline-none border-2 mb-1 text-2xl" placeholder="273.15"/>
                        <p className="text-center">K</p>
                        <div className="flex flex-col items-center gap-1 mt-3 text-gray-500">
                            <p className="text-center">Punctul de inghet: 273.15K</p>
                            <p className="text-center">Punctul de fierbere: 373.15K</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg px-2 py-4 w-full bg-white shadow-xl mt-3">
                    <div className="flex gap-2">
                        <p>📐</p>
                        <h3 className="font-bold text-lg">Formule de conversie:</h3>
                    </div>
                    <div className="mt-2 gap-2 grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1">
                        <p className="rounded-lg p-2 bg-cyan-50 w-full">°F = (°C × 9/5) + 32</p>
                        <p className="rounded-lg p-2 bg-orange-50 w-full">°C = (°F - 32) × 5/9</p>
                        <p className="rounded-lg p-2 bg-purple-50 w-full">K = °C + 273.15</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-xl py-3 px-2 flex justify-center mt-3">
                    <p>💡 <b>Știai că:</b> Kelvin este singura scală de temperatură care nu folosește simbolul de grade (°)!</p>
                </div>
            </div>
        </div>
    )
}