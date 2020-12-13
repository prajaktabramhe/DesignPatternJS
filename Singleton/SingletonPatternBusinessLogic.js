
let programmer = function () 
{
    let programmerInstance;
    /*
    @description: Create a programmer Object
    */
    function Condition() 
    {
        let issleeping = false;

        function notsleeping() 
        {
            issleeping = false;
        }

        function sleeping() 
        {
            issleeping = true;
        }

        function Activity() 
        {
            return issleeping ? "Programmer is sleeping" : " Programmer is not  sleeping "
        }

        return {
            notsleeping: notsleeping,
            sleeping: sleeping,
            Activity: Activity
        };
    }
    return {
        getInstance: function () 
        {
            if (!programmerInstance) programmerInstance = Condition();
            return programmerInstance;
        },
    };
};


module.exports = new  programmer();