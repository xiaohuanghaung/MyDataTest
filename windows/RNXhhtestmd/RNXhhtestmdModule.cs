using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Xhhtestmd.RNXhhtestmd
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNXhhtestmdModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNXhhtestmdModule"/>.
        /// </summary>
        internal RNXhhtestmdModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNXhhtestmd";
            }
        }
    }
}
